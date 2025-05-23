import { Component, ElementRef, ViewChild } from '@angular/core';
import fmt from '../../scripts/fmt'
import { buildingCodeFromLocation } from '../../scripts/building';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  @ViewChild('mapSvg', { static: true }) mapSvg!: ElementRef<SVGSVGElement>;
  buildings: string[] = [];
  allBuildings: string[] = [];
  description: string = '';
  currentHighlights: string[] = [];
  refs: { [key: string]: Element } = {};

  ngOnInit(): void {
    const svgElement = this.mapSvg.nativeElement;
    const childElements = svgElement.querySelectorAll(':scope > *:not(.road)');

    childElements.forEach((item) => {
      const id = item.getAttribute('id');
      if (id) {
        this.refs[id] = item;
        const formattedId = fmt(id);
        this.buildings.push(formattedId);

        item.addEventListener('mouseenter', () => {
          this.description = formattedId;
        });
      }
    });
  }

  buildingSearchInput(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.buildings = this.allBuildings.filter((building) => {
      return building.toLowerCase().includes(searchTerm);
    });
  }

  highlightBuilding(target: string) {
    // clear other highlights
    for (const currentHighlight of this.currentHighlights) {
      const element: Element = this.refs[currentHighlight];
      element.classList.remove('highlighted');
    }

    const class_to_highlight = buildingCodeFromLocation(target);
    console.log(class_to_highlight);
    if (class_to_highlight == null) {
      return;
    }
    this.currentHighlights.push(class_to_highlight);

    setTimeout(() => {
      const element: Element = this.refs[class_to_highlight];
      element.classList.add('highlighted');
    }, 100);
  }
}
