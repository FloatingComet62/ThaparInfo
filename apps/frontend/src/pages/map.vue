<script lang="ts">
import { buildingCodeFromLocation } from '../scripts/building';
export default {
  data() {
    const route = useRoute();
    const target = route.query.target;
    return {
      target,
      description: "Choose a building",
    }
  },
  mounted() {
    if (this.target == null) {
      return;
    }
    const class_to_highlight = buildingCodeFromLocation(this.target.toString());
    console.log(class_to_highlight);
    if (class_to_highlight == null) {
      return;
    }
    setTimeout(() => {
      const element: any = this.$refs[class_to_highlight];
      element.classList.add('highlighted');
    }, 100);

    for (const item of (this.$refs.map_svg as any).querySelectorAll(':scope > *:not(.road)')) {
      item.addEventListener('mouseenter', () => {
        this.description = item.getAttribute('id');
      })
    }
  }
}
</script>

<template>
  <div class="map">
    <div class="description">
      {{ description }}
    </div>
    <svg
      ref="map_svg" id="map_svg"
      width="1362"
      height="736"
      viewBox="0 0 1362 736"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref="road" class="road" id="road">
        <path
          d="M475 3H778V21H475V3Z"
          fill="#222C36"
        />
        <path
          d="M556 21H577V711H556V21Z"
          fill="#222C36"
        />
        <path
          d="M36 711H1236V733H36V711Z"
          fill="#222C36"
        />
        <path
          d="M9 430H1213V452H9V430Z"
          fill="#222C36"
        />
        <path
          d="M995 452H1014V711H995V452Z"
          fill="#222C36"
        />
        <path
          d="M683 22H705V259H683V22Z"
          fill="#222C36"
        />
        <path
          d="M577 242H683V259H577V242Z"
          fill="#222C36"
        />
        <path
          d="M343 452H351V711H343V452Z"
          fill="#222C36"
        />
        <path
          d="M351 588H556V606H351V588Z"
          fill="#222C36"
        />
        <path
          d="M237 594H244V711H237V594Z"
          fill="#222C36"
        />
        <path
          d="M244 594H344V601H244V594Z"
          fill="#222C36"
        />
        <path
          d="M146 157H159V431H146V157Z"
          fill="#222C36"
        />
        <path
          d="M457 105H556V123H457V105Z"
          fill="#222C36"
        />
        <path
          d="M793 271H801V431H793V271Z"
          fill="#222C36"
        />
        <path
          d="M737 341H793V348H737V341Z"
          fill="#222C36"
        />
        <path
          d="M894 452H897V481H894V452Z"
          fill="#222C36"
        />
        <path
          d="M897 478H959V481H897V478Z"
          fill="#222C36"
        />
        <path
          d="M956 481H959V486H956V481Z"
          fill="#222C36"
        />
        <path
          d="M956 521H961V564H956V521Z"
          fill="#222C36"
        />
        <path
          d="M938 559H956V564H938V559Z"
          fill="#222C36"
        />
        <path
          d="M961 559H995V564H961V559Z"
          fill="#222C36"
        />
        <path
          d="M1084 633H1088V711H1084V633Z"
          fill="#222C36"
        />
        <path
          d="M1014 647H1084V654H1014V647Z"
          fill="#222C36"
        />
        <path
          d="M1088 668H1173V675H1088V668Z"
          fill="#222C36"
        />
        <path
          d="M691 585H697V711H691V585Z"
          fill="#222C36"
        />
        <path
          d="M828 94H835V265H828V94Z"
          fill="#222C36"
        />
        <path
          d="M705 170H828V179H705V170Z"
          fill="#222C36"
        />
        <path
          d="M1037 198.5L1043 195L1045 190.857L1048 283H1038L1037 198.5Z"
          fill="#222C36"
        />
        <path
          d="M1161 237H1170V352H1161V237Z"
          fill="#222C36"
        />
        <path
          d="M1170 263H1316V271H1170V263Z"
          fill="#222C36"
        />
        <path
          d="M1308 271H1316V325H1308V271Z"
          fill="#222C36"
        />
        <path
          d="M1208.7 439.252L1306.54 422L1307.93 429.878L1210.09 447.13L1208.7 439.252Z"
          fill="#222C36"
        />
        <path
          d="M1071 170.304L1075.93 164L1169.68 237.246L1164.75 243.55L1071 170.304Z"
          fill="#222C36"
        />
        <path
          d="M678.286 248.916L829.973 254.213L829.624 264.207L677.937 258.91L678.286 248.916Z"
          fill="#222C36"
        />
        <path
          d="M683 259H705V22H683V259ZM683 259V242H577V259H683ZM244 594H237V711H244V594ZM244 594H344V601H244V594ZM897 481V452H894V481H897ZM897 481H959M897 481V478H959V481M959 481H956V486H959V481ZM961 564V521H956V564M961 564H956M961 564H995V559H961V564ZM956 564V559H938V564H956ZM1316 271V263H1170V271H1316ZM1316 271H1308V325H1316V271ZM1212 717.5C1212 717.5 1202.14 699.919 1193.5 690.5C1185.73 682.025 1171 671.5 1171 671.5L1193.5 619M988.5 562.5C988.5 559.5 977.825 552.968 978 545C978.127 539.232 980.159 535.805 984 531.5C988.651 526.287 1000 523.5 1000 523.5M575 388.5C575 388.5 594.849 396.578 603.5 406.5C610.846 414.925 616.5 432 616.5 432M364.5 279.5C364.5 279.5 374.5 214 390.5 175C397.264 158.512 400.825 147.302 415 136.5C428.408 126.283 439.345 125.601 456 123C471.82 120.53 493 123 496.5 124.5C500 126 514.443 134.392 523.5 144C533.53 154.64 537.231 162.312 544.5 175C550.665 185.759 558.5 203.5 558.5 203.5M1158.5 145L1090 150.5L1035.5 75.5L879 82L829.5 94.5C829.5 94.5 796.709 100.343 775.5 102.5C748.667 105.229 706.5 105.5 706.5 105.5M832.5 263C832.5 263 925.002 255.639 979 233.5C1029 213 1088.5 151 1088.5 151M1302.5 427C1302.5 427 1295 385 1296.5 358.5C1298 332 1311 319.5 1311 319.5C1311 319.5 1327.89 346.478 1341 362C1347.69 369.918 1359 381.5 1359 381.5M475 3H778V21H475V3ZM556 21H577V711H556V21ZM36 711H1236V733H36V711ZM9 430H1213V452H9V430ZM995 452H1014V711H995V452ZM343 452H351V711H343V452ZM351 588H556V606H351V588ZM146 157H159V431H146V157ZM457 105H556V123H457V105ZM793 271H801V431H793V271ZM737 341H793V348H737V341ZM1084 633H1088V711H1084V633ZM1014 647H1084V654H1014V647ZM1088 668H1173V675H1088V668ZM691 585H697V711H691V585ZM828 94H835V265H828V94ZM705 170H828V179H705V170ZM1037 198.5L1038 283H1048L1045 190.857L1043 195L1037 198.5ZM1161 237H1170V352H1161V237ZM1208.7 439.252L1306.54 422L1307.93 429.878L1210.09 447.13L1208.7 439.252ZM1071 170.304L1075.93 164L1169.68 237.246L1164.75 243.55L1071 170.304ZM678.286 248.916L829.973 254.213L829.624 264.207L677.937 258.91L678.286 248.916Z"
          stroke="#222C36"
          stroke-width="6"
        />
      </g>
      <path
        ref="Rectangle 412" id="Rectangle 412"
        d="M-0.00195312 165.183H21.998V186H37.998V165.183H49.998V217.183H37.998L38 199L21.498 199.183V217.183H-0.00195312V165.183Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 413" id="Rectangle 413"
        d="M65 165H87V185.817H103V165H115V217H103L103.002 198.817L86.5 199V217H65V165Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 414" id="Rectangle 414"
        d="M65 237H87V257.817H103V237H115V289H103L103.002 270.817L86.5 271V289H65V237Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 415" id="Rectangle 415"
        d="M0 237H22V257.817H38V237H50V289H38L38.002 270.817L21.5 271V289H0V237Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 416" id="Rectangle 416"
        d="M67 316H71V310H77V313H85V316.5H97V313H105V311H111V317H116V330H111V335H105V333H97V330H85V332H77V336H71V330H67V316Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 417" id="Rectangle 417"
        d="M67 355H71V349H77V352H85V355.5H97V352H105V350H111V356H116V369H111V374H105V372H97V369H85V371H77V375H71V369H67V355Z"
        fill="#956BE0"
      />
      <path
        ref="Rectangle 418" id="Rectangle 418"
        d="M67 394H71V388H77V391H85V394.5H97V391H105V389H111V395H116V408H111V413H105V411H97V408H85V410H77V414H71V408H67V394Z"
        fill="#956BE0"
      />
      <path
        ref="hostel k" id="hostel k"
        d="M489.5 69.5H476.5V57V56.5H476H446.5H446V57V70V70.5H446.5H476H476.5H489.5H490H520H520.5V70V64H531.5V74V74.5H532H533.5V82.5H526.5V81V80.5H526H443H442.5V81V82.5H433.5V75.5H435H435.5V75V52V51.5H435H433.5V43.5H440.5V45V45.5H441H472H472.5V45V39.5H492.5V45V45.5H493H525H525.5V45V43.5H533.5V50.5H532H531.5V51V63H520.5V57V56.5H520H490H489.5V57V69.5Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel l" id="hostel l"
        d="M722 49.5H719.5V34.5H731.5V38V38.5H732H745H745.5V38V28.5H757.5V36V36.5H758H770H770.5V36V34.5H779.5V64.5H766.5V52V51.5H766H735H734.5V52V65V65.5H735H765.5H766H779.5V67.5H774H773.5V68V71.5H768H767.5V72V77.5H733.5V73V72.5H733H727.5V69V68.5H727H722.5V50V49.5H722Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <g ref="staff quarters" id="staff quarters">
        <path
          d="M843 153H857V167.5H878.5V182H843V153Z"
          fill="#423064"
        />
        <path
          d="M870 191H897V239H843.5V217.5H870V191Z"
          fill="#423064"
        />
        <path
          d="M925 133.785L946.92 119L954.159 129.732L932.239 144.517L925 133.785Z"
          fill="#423064"
        />
        <path
          d="M952.895 114.763L975.793 101.542L982.265 112.753L959.367 125.973L952.895 114.763Z"
          fill="#423064"
        />
        <path
          d="M982.067 98.5028L1005.19 85.6841L1011.47 97.0062L988.343 109.825L982.067 98.5028Z"
          fill="#423064"
        />
        <path
          d="M1018.68 132.379L1037.38 113.682L1050.18 126.48L1031.48 145.176L1018.68 132.379Z"
          fill="#423064"
        />
        <path
          d="M1004.25 117.249L1018.1 103.401L1027.85 113.152L1014 127L1004.25 117.249Z"
          fill="#423064"
        />
        <path
          d="M1038 148.848L1051.85 135L1061.6 144.751L1047.75 158.599L1038 148.848Z"
          fill="#423064"
        />
        <path
          d="M1008 183.848L1026.47 165.374L1036.23 175.125L1017.75 193.599L1008 183.848Z"
          fill="#423064"
        />
        <path
          d="M976.045 200.68L1000.09 190.472L1005.48 203.166L981.433 213.375L976.045 200.68Z"
          fill="#423064"
        />
        <path
          d="M903.849 180.51L928.5 170.5L927 166.5L939 161.5L940.5 165.5L947 163L955.638 183.967L911.657 200.85L903.849 180.51Z"
          fill="#423064"
        />
        <path
          d="M958 158.865L981.685 146.745L979.842 142.89L991.361 136.863L993.203 140.718L999.461 137.661L1009.89 157.795L967.551 178.447L958 158.865Z"
          fill="#423064"
        />
      </g>
      <g ref="health care" id="health care">
        <rect
          ref="Rectangle fuck" id="Rectangle fuck"
          x="935.097"
          y="205.548"
          width="36"
          height="28.5207"
          transform="rotate(-21 935.097 205.548)"
          fill="#D9D9D9"
        />
        <rect
          ref="Rectangle 426" id="Rectangle 426"
          x="950.535"
          y="203.659"
          width="6"
          height="20"
          transform="rotate(-21 950.535 203.659)"
          fill="#CE0808"
        />
        <rect
          ref="Rectangle 427" id="Rectangle 427"
          x="948.659"
          y="218.304"
          width="6"
          height="20"
          transform="rotate(-111 948.659 218.304)"
          fill="#CE0808"
        />
      </g>
      <rect
        ref="sports office" id="sports office"
        x="585"
        y="197"
        width="47"
        height="37"
        fill="#D9D9D9"
      />
      <rect
        ref="tennis court" id="tennis court"
        x="497"
        y="257"
        width="38"
        height="64"
        fill="#D9D9D9"
      />
      <rect
        ref="badminton court" id="badminton court"
        x="536"
        y="257"
        width="16"
        height="64"
        fill="#D9D9D9"
      />
      <rect
        ref="basketball court" id="basketball court"
        x="583"
        y="279"
        width="25"
        height="39"
        fill="#D9D9D9"
      />
      <rect
        ref="basketball court_2" id="basketball court_2"
        x="657"
        y="279"
        width="16"
        height="28"
        fill="#D9D9D9"
      />
      <rect
        ref="basketball court_3" id="basketball court_3"
        x="637"
        y="279"
        width="16"
        height="28"
        fill="#D9D9D9"
      />
      <rect
        ref="tennis court_2" id="tennis court_2"
        x="638"
        y="314"
        width="16"
        height="28"
        fill="#D9D9D9"
      />
      <rect
        ref="tennis court_3" id="tennis court_3"
        x="657"
        y="315"
        width="16"
        height="28"
        fill="#D9D9D9"
      />
      <rect
        ref="volleyball court" id="volleyball court"
        x="609"
        y="279"
        width="9"
        height="14"
        fill="#D9D9D9"
      />
      <rect
        ref="volleyball court_2" id="volleyball court_2"
        x="619"
        y="279"
        width="9"
        height="14"
        fill="#D9D9D9"
      />
      <rect
        ref="indoor courts" id="indoor courts"
        x="583"
        y="321"
        width="42"
        height="57"
        fill="#D9D9D9"
      />
      <rect
        ref="swimming pool" id="swimming pool"
        x="636"
        y="353"
        width="48"
        height="41"
        fill="#D9D9D9"
      />
      <rect
        ref="kravings" id="kravings"
        x="697"
        y="459"
        width="73"
        height="31"
        fill="#EA2134"
      />
      <path
        ref="tan" id="tan"
        d="M841 471.95H860.943L861 482.95H865V471.95H872V469.95H883V492.95H881V500.038L887 502V518H870L869 515L847 517V487H841V471.95Z"
        fill="#4040D2"
      />
      <g ref="running track" id="running track">
        <path
          d="M170 268H185V391H170V268Z"
          fill="#D9D9D9"
        />
        <path
          d="M257 282.5C257 301.554 240.211 317 219.5 317C198.789 317 182 301.554 182 282.5C182 263.446 198.789 248 219.5 248C240.211 248 257 263.446 257 282.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M257 379.5C257 398.554 240.211 414 219.5 414C198.789 414 182 398.554 182 379.5C182 360.446 198.789 345 219.5 345C240.211 345 257 360.446 257 379.5Z"
          fill="#D9D9D9"
        />
        <path
          d="M182 282H257V383H182V282Z"
          fill="#D9D9D9"
        />
      </g>
      <path
        ref="oat" id="oat"
        d="M339 290L361.5 309L366.5 324.5L365.5 347.5V363L358 374L356 372.5L360 364.5L342.5 355.5L338.5 361.5L334 358L340 350.5L335.5 346.5L327.5 354.5L311.5 337.5L320 331.5L315.5 326.5L308 331L299 308L339 290Z"
        fill="#A36735"
      />
      <path
        ref="cos" id="cos"
        d="M284 303L293 298.5L307.5 332.5L315 328L318 331L310 337L327.5 355.5L335 348.5L338.5 351L332 358.5L339 363L342.5 357.5L357.5 365L355 372L357.5 375.5L350 387C350 387 326.5 376.5 307.5 350C288.5 323.5 284 303 284 303Z"
        fill="#59013B"
      />
      <rect
        ref="shiv mandir" id="shiv mandir"
        x="290"
        y="511"
        width="48"
        height="34"
        fill="#D9A762"
      />
      <rect
        ref="guru dwara" id="guru dwara"
        x="289"
        y="548"
        width="50"
        height="34"
        fill="#D9A762"
      />
      <ellipse
        ref="cricket field" id="cricket field"
        cx="464.5"
        cy="191"
        rx="63.5"
        ry="61"
        fill="#92D178"
      />
      <path
        ref="hostel d" id="hostel d"
        d="M59.4436 617.5H69.5V622V622.5H70H102.5V632.5H101H100.5V633V678.5H87.5V675V674.5H87H83H82.5V675V679.5H69.5V675V674.5H69H64.5V673.5H69H69.5V673V668.5H82.5V673V673.5H83H87H87.5V673V668.5H88H88.5V668V634V633.5H88H74.5V632V631.5H74H68H67.5539L67.5032 631.943L63.5032 666.943L63.5 666.972V667V672.5V673V675V675.5V682.5H53.5V667.03L59.4436 617.5Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel o" id="hostel o"
        d="M273.444 615.5H283.5V620V620.5H284H316.5V630.5H315H314.5V631V676.5H301.5V673V672.5H301H297H296.5V673V677.5H283.5V673V672.5H283H278.5V671.5H283H283.5V671V666.5H296.5V671V671.5H297H301H301.5V671V666.5H302H302.5V666V632V631.5H302H288.5V630V629.5H288H282H281.554L281.503 629.943L277.503 664.943L277.5 664.972V665V670.5V671V673V673.5V680.5H267.5V665.03L273.444 615.5Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel a" id="hostel a"
        d="M484.444 615.5H494.5V620V620.5H495H527.5V630.5H526H525.5V631V676.5H512.5V673V672.5H512H508H507.5V673V677.5H494.5V673V672.5H494H489.5V671.5H494H494.5V671V666.5H507.5V671V671.5H508H512H512.5V671V666.5H513H513.5V666V632V631.5H513H499.5V630V629.5H499H493H492.554L492.503 629.943L488.503 664.943L488.5 664.972V665V670.5V671V673V673.5V680.5H478.5V665.03L484.444 615.5Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel q" id="hostel q"
        d="M713 656L719 606H730V611H763V622H761V668H747V664H743V669H729V664H724V662H729V657H743V662H747V657H748V623H734V621H728L724 656V672H713V656Z"
        fill="#EF5E96"
      />
      <path
        ref="hostel c" id="hostel c"
        d="M158.5 621.5H178.5V628.5H158.5V621.5ZM157.5 629V629.5V644.5V645V652V652.5V661.979L150.663 661.501L150.5 661.49V652.5H155H155.5V652V648V647.5H155H152.5V644.5H155H155.5V644V641V640.5H155H152.5V628.5H156H156.5V628V626V625.5H156H154.5V620.5H157.5V621V629ZM158.5 651.5V645.5H175.5V651.5H158.5ZM151.092 662.534L157.5 662.982V670.5H150.535L151.092 662.534ZM210.5 622.444V626.5H204H203.5H187.5V620V619.684L210.5 622.444ZM186 627.5H186.5V640.5V641V648.5H183.5V644V643.5H183H179.5V629.5H180H180.5V629V621V620.5H185.5V627V627.5H186ZM187.5 641.5H203.5H204H221.5V649.5H214.5H214H208H207.5H187.5V649V641.5ZM222 640.5H204.5V627.5H211H211.5H213.5H213.63L213.743 627.437L218.012 625.065L222.5 627.309V640.5H222ZM182.5 644.5V648.5H179.5V644.5H182.5ZM178.5 644.5V649V649.5H179H182.5V663.727L176.5 663.308V652.5V652V645V644.5H178.5ZM158.5 663.052L175.5 664.24V671.5H172H171.5V671.98L158.5 671.071V671V663.052ZM176.5 671.5V664.31L182.5 664.73V671.5H176.5ZM183.5 671.5V664.8L207.5 666.478V674.498L185.5 672.959V672V671.5H185H183.5ZM208.5 674.568V666.548L212.701 666.842L212.143 674.822L208.5 674.568ZM213.098 675.5L213.105 675.391L213.5 669.747V675.5H213.098ZM213.5 665.895L213.269 665.879L208.5 665.546V650.5H213.5V665.895ZM184.5 672.5V672.889L183.5 672.819V672.5H184.5ZM182.5 672.5V672.749L178.932 672.5H182.5ZM176.5 673.332L182.5 673.752V674.5H176.5V673.332ZM175.5 673.262V675V675.5H176H183H183.5V675V673.822L184.5 673.892V680.5H172.5V673.053L175.5 673.262Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel b" id="hostel b"
        d="M377.126 617.618L376.656 622.093L376.603 622.591L375.035 637.509L374.983 638.006L374.147 645.962L374.095 646.459L372.736 659.388L372.683 659.885L371.899 667.344L365.932 666.717L371.159 616.991L377.126 617.618ZM372.894 667.449L373.626 660.487L393.516 662.578L392.784 669.539L387.315 668.964L386.817 668.912L372.894 667.449ZM378.12 617.723L398.011 619.813L397.593 623.791L377.702 621.701L378.12 617.723ZM398.587 623.896L399.005 619.918L402.983 620.336L402.565 624.314L398.587 623.896ZM398.483 624.89L402.958 625.361L403.455 625.413L403.508 624.916L403.978 620.44L404.973 620.545L403.091 638.446L403.039 638.944L402.203 646.9L402.15 647.397L400.373 664.304L400.321 664.801L399.746 670.271L393.779 669.644L394.563 662.185L394.615 661.688L395.974 648.759L396.026 648.262L396.863 640.305L396.915 639.808L398.483 624.89ZM375.194 645.569L375.925 638.608L395.816 640.698L395.084 647.66L375.194 645.569ZM393.177 670.586L399.642 671.266L399.485 672.757L399.432 673.255L398.91 678.227L386.976 676.973L387.707 670.011L393.177 670.586ZM426.491 654.983L424.004 654.721L423.507 654.669L417.54 654.042L418.063 649.069L423.532 649.644L424.03 649.697L424.082 649.199L424.866 641.74L427.85 642.054L426.491 654.983ZM403.249 646.507L403.981 639.545L417.904 641.009L417.173 647.97L403.249 646.507ZM418.167 648.075L418.899 641.113L423.871 641.636L423.14 648.598L418.167 648.075ZM400.688 670.873L401.263 665.403L422.148 667.598L422.645 667.65L435.077 668.957L434.345 675.919L400.532 672.365L400.688 670.873ZM435.913 661.001L435.182 667.962L423.247 666.708L423.979 659.746L426.465 660.008L426.963 660.06L435.913 661.001ZM426.073 658.961L424.083 658.752L424.397 655.768L426.386 655.977L426.073 658.961Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <path
        ref="hostel m" id="hostel m"
        d="M172.5 535.76L165.394 541.445L136.5 532.63V517.5H172.5V535.76ZM165.5 550.5V542.523L165.606 542.555L165.675 542.5H173.5V550.5H165.5ZM199.5 517.5H212.651L223.435 546.91L218.257 553.5H199.5V517.5ZM190.93 482.058L198.5 487.263V505.5H161.5V492.849L190.93 482.058ZM170.069 555.046L199.5 564.366V577.5H162.5V559.777L170.069 555.046Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <g ref="hostel j" id="hostel j">
        <path
          ref="Vector 12" id="Vector 12"
          d="M389 490L397 494.5L395.015 508M390.5 573.5L398.5 569.5L395.924 553.25M395.015 508L383 506M395.015 508L392.809 523M392.809 523C392.809 523 392.059 526.33 392 528.5C391.908 531.86 393.348 537 393.348 537M392.809 523L380.5 521.5M393.348 537L380.5 539.5M393.348 537L395.924 553.25M395.924 553.25L386 555.5M427 490L417.5 494.5L421.404 509.5M421.404 509.5L422.25 512.75L425.699 526M421.404 509.5L433.5 508M425.699 526L427 531L425.025 541M425.699 526L436.5 525M425.025 541H438.5M425.025 541L422.012 556.25M422.012 556.25L419.5 571L429.5 573.5M422.012 556.25L433.5 558"
          stroke="#5BACFF"
          stroke-width="5"
        />
        <path
          ref="Vector" id="Vector"
          d="M393.5 524.5H404.519C404.506 524.665 404.5 524.832 404.5 525C404.5 525.516 404.56 526.018 404.674 526.5H393.5V524.5ZM405.5 525C405.5 524.831 405.508 524.665 405.522 524.5H416.478C416.492 524.665 416.5 524.831 416.5 525C416.5 525.52 416.428 526.023 416.293 526.5H405.707C405.572 526.023 405.5 525.52 405.5 525ZM416.293 523.5H405.707C406.36 521.191 408.482 519.5 411 519.5C413.518 519.5 415.64 521.191 416.293 523.5ZM417.5 525C417.5 524.832 417.494 524.665 417.481 524.5H424.5V526.5H417.326C417.44 526.018 417.5 525.516 417.5 525ZM406.1 527.5H415.9C414.99 529.281 413.137 530.5 411 530.5C408.863 530.5 407.01 529.281 406.1 527.5Z"
          fill="#5BACFF"
          stroke="#5BACFF"
        />
      </g>
      <path
        ref="hostel h" id="hostel h"
        d="M508.5 504.5V510.5H504.5V504.5H508.5ZM504.5 511.5H508.5V542.5H504.5V511.5ZM504 503.5H503.5H474.276L468.5 494.355V488.034L490.253 489.485L492.616 492.32L492.766 492.5H493H508.5H508.678L508.816 492.387L527.546 477.107L535.407 481.731L532.076 492.676L514.856 503.5H509.5H509H504ZM504.5 543.5H508.5V550.5H504.5V543.5ZM503.5 511.5V542.5H491V526H493H493.5V525.5V511.5H503.5ZM509 551.5H509.5H517.856L535.076 562.324L538.407 573.269L530.546 577.893L511.816 562.613L511.678 562.5H511.5H496H495.766L495.616 562.68L493.253 565.515L471.5 566.966V560.645L477.276 551.5H503.5H504H509ZM509.5 542.5V511.5H513.75L519.5 519.167V533.355L513.724 542.5H509.5Z"
        fill="#5BACFF"
        stroke="#5BACFF"
      />
      <rect
        ref="just food" id="just food"
        x="532.883"
        y="544"
        width="16"
        height="12"
        transform="rotate(35 532.883 544)"
        fill="#EA2134"
      />
      <path
        ref="hostel pg" id="hostel pg"
        d="M592 598H610H673V616H664V654.5H673V669L610 671V654.5H650.5V616H610V654.5V671H592V598Z"
        fill="#EF5E96"
      />
      <path
        ref="fete area" id="fete area"
        d="M376 257H493V329.5H540V406L529.5 420H376V257Z"
        fill="#92D178"
      />
      <path
        ref="nirvana" id="nirvana"
        d="M586 459H696V491H771.5V459H793.5V527H876V610H948V637H896V702H786V583H694L586 584V459Z"
        fill="#92D178"
      />
      <path
        ref="hostel e" id="hostel e"
        d="M713 291H729V289H745V286H754V289H770V292H778V295H782V303H777V300H769L764 297H735V307H740V317H734V326H764V297L769 300V307L774 312L769 317V322H776V320H781V328H777V331H768V333H752V336H744V333H728V331H712V328H708V320H711V323H730V317H726V314H719V318H708V304H719V309H726V307H731V299H712V301H709V293H713V291Z"
        fill="#EF5E96"
      />
      <path
        ref="hostel g" id="hostel g"
        d="M713 373H729V371H745V368H754V371H770V374H778V377H782V385H777V382H769L764 379H735V389H740V399H734V408H764V379L769 382V389L774 394L769 399V404H776V402H781V410H777V413H768V415H752V418H744V415H728V413H712V410H708V402H711V405H730V399H726V396H719V400H708V386H719V391H726V389H731V381H712V383H709V375H713V373Z"
        fill="#EF5E96"
      />
      <path
        ref="hostel i" id="hostel i"
        d="M840 289H868V301H851V305H874V315H876V322H867V315H825V329H867V322H876V329H874V341H820V327H818V317H820V305H846V301H830V294H840V289Z"
        fill="#EF5E96"
      />
      <path
        ref="hostel n" id="hostel n"
        d="M812 369H880V396H871V392H875V378H855V384H845V378H842V380H827V378H815V385H818V400H815V408H830V401H841V408H844V405H868V408H875V401H871V396H880V414H812V369Z"
        fill="#EF5E96"
      />
      <rect
        ref="g block canteen" id="g block canteen"
        x="880"
        y="548"
        width="53"
        height="58"
        fill="#D9D9D9"
      />
      <rect
        ref="stationary shop" id="stationary shop"
        x="955"
        y="574"
        width="34"
        height="63"
        fill="#D9D9D9"
      />
      <path
        ref="g block" id="g block"
        d="M914 461H981V473H964V487H983V496H978V505H962V512H965V526H943V512H954V502H913V487H937V494H940V487H953V489H961V475H954V472H937V475H914V461Z"
        fill="#32A432"
      />
      <path
        ref="lp101_104" id="lp101_104"
        d="M894 411L924 401H962V426H894V411Z"
        fill="#EE5064"
      />
      <path
        ref="library" id="library"
        d="M983 414L1043 391L1070 398.5V426H983V414Z"
        fill="#EE5064"
      />
      <path
        ref="lt" id="lt"
        d="M941 341H999V363L959 379.5L941 367.5V341Z"
        fill="#EE5064"
      />
      <rect
        ref="waterbody cafe" id="waterbody cafe"
        x="1024"
        y="356"
        width="10"
        height="28"
        fill="#EE5064"
      />
      <ellipse
        ref="waterbody" id="waterbody"
        cx="1010"
        cy="373.5"
        rx="8"
        ry="7.5"
        fill="#8DB3D8"
      />
      <rect
        ref="lp105_107" id="lp105_107"
        x="970"
        y="392.581"
        width="32.1354"
        height="16"
        transform="rotate(-25 970 392.581)"
        fill="#EE5064"
      />
      <path
        ref="cs block" id="cs block"
        d="M931 272H999V306L984.5 313.5L931 295V272Z"
        fill="#EE5064"
      />
      <rect
        ref="activity space" id="activity space"
        x="933.512"
        y="303"
        width="45"
        height="20"
        transform="rotate(19 933.512 303)"
        fill="#EE5064"
      />
      <path
        ref="lp108_111" id="lp108_111"
        d="M1024 280.5L1078 293V312H1024V280.5Z"
        fill="#EE5064"
      />
      <rect
        ref="sbop lawns" id="sbop lawns"
        x="952"
        y="643"
        width="39"
        height="61"
        fill="#92D178"
      />
      <rect
        ref="main audi" id="main audi"
        x="1021"
        y="660"
        width="51"
        height="43"
        fill="#A36735"
      />
      <rect
        ref="jaggi" id="jaggi"
        x="1042"
        y="582"
        width="38"
        height="62"
        fill="#EA2134"
      />
      <rect
        ref="post office" id="post office"
        x="1019"
        y="582"
        width="19"
        height="59"
        fill="#D9D9D9"
      />
      <rect
        ref="aahar" id="aahar"
        x="1149"
        y="555"
        width="31"
        height="27"
        fill="#EA2134"
      />
      <rect
        ref="h block" id="h block"
        x="1216"
        y="539.499"
        width="20"
        height="42"
        transform="rotate(-13 1216 539.499)"
        fill="#32A432"
      />
      <g ref="d block" id="d block">
        <path
          d="M1037
          460H1080V474H1034V470H1037V460Z"
          fill="#4040D2"
        />
        <path
          d="M1148 462V478H1119V473H1116V475H1109V470H1115V462H1148Z"
          fill="#4040D2"
        />
      </g>
      <path
        ref="c block" id="c block"
        d="M1033 481H1053V495H1056V499H1160V513H1149V517H1117V513H1032V503H1037V500H1048V495H1033V481Z"
        fill="#4040D2"
      />
      <path
        ref="b block" id="b block"
        d="M1035 539H1164V552H1145V556H1116V552H1035V559H1032V552H1027V543H1035V539Z"
        fill="#4040D2"
      />
      <g ref="f block" id="f block">
        <rect
          ref="Rectangle 420" id="Rectangle 420"
          x="1177.35"
          y="463.691"
          width="11"
          height="12"
          transform="rotate(48 1177.35 463.691)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 421" id="Rectangle 421"
          x="1191.47"
          y="464.431"
          width="11"
          height="12"
          transform="rotate(48 1191.47 464.431)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 422" id="Rectangle 422"
          x="1190.73"
          y="478.554"
          width="11"
          height="12"
          transform="rotate(48 1190.73 478.554)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 423" id="Rectangle 423"
          x="1176.61"
          y="477.814"
          width="11"
          height="12"
          transform="rotate(48 1176.61 477.814)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 424" id="Rectangle 424"
          x="1167"
          y="473"
          width="10"
          height="12"
          fill="#4040D2"
        />
      </g>
      <g ref="e block" id="e block">
        <rect
          ref="Rectangle 420_2" id="Rectangle 420_2"
          x="1178.35"
          y="508.696"
          width="11"
          height="12"
          transform="rotate(48 1178.35 508.696)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 421_2" id="Rectangle 421_2"
          x="1192.48"
          y="509.437"
          width="11"
          height="12"
          transform="rotate(48 1192.48 509.437)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 422_2" id="Rectangle 422_2"
          x="1191.74"
          y="523.56"
          width="11"
          height="12"
          transform="rotate(48 1191.74 523.56)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 423_2" id="Rectangle 423_2"
          x="1177.61"
          y="522.819"
          width="11"
          height="12"
          transform="rotate(48 1177.61 522.819)"
          fill="#4040D2"
        />
        <rect
          ref="Rectangle 424_2" id="Rectangle 424_2"
          x="1168"
          y="518.005"
          width="10"
          height="12"
          fill="#4040D2"
        />
      </g>
      <rect
        ref="cd corridor" id="cd corridor"
        x="1119"
        y="478"
        width="9"
        height="21"
        fill="#4040D2"
      />
      <rect
        ref="bc corridor" id="bc corridor"
        x="1119"
        y="517"
        width="9"
        height="22"
        fill="#4040D2"
      />
      <path
        ref="directorate" id="directorate"
        d="M1117 556H1127V585H1135.5V581.5C1135.5 581.5 1142.05 582.517 1146 584C1149.92 585.475 1155.5 589 1155.5 589L1148.5 601H1096.5V585.5H1117V556Z"
        fill="#4040D2"
      />
      <path
        ref="mechanical workshop" id="mechanical workshop"
        d="M1104 390H1159V404H1165V411H1174V406H1182V390H1254V420H1104V390Z"
        fill="#32A432"
      />
      <rect
        ref="cd corridor2" id="cd corridor2"
        x="1060"
        y="474"
        width="15"
        height="25"
        fill="#4040D2"
      />
      <rect
        ref="bc corridor2" id="bc corridor2"
        x="1059"
        y="513"
        width="14"
        height="27"
        fill="#4040D2"
      />
      <path
        ref="Rectangle 425" id="Rectangle 425"
        d="M242 462H339V510H288L286.5 583H242V462Z"
        fill="#92D178"
      />
    </svg>
  </div>
</template>

<style>
.map {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/*
this is an svg path
it will glow golden all the time
and will be slightly scaled up in size
*/
.highlighted > * {
  fill: gold;
}
.highlighted {
  fill: gold;
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(0 0 5px gold);
  filter: drop-shadow(0 0 10px gold);
  filter: drop-shadow(0 0 15px gold);
  filter: drop-shadow(0 0 20px gold);
  filter: drop-shadow(0 0 25px gold);
}
svg > *:not(.road):hover {
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(0 0 5px gold);
}
</style>
