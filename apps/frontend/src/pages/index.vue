<template>
  <main>
    <NuxtLink to="/timetable">
      <div class="button">
        <img
          src="~/assets/timetable_icon.svg"
          alt="Timetable"
        />
        <div class="text">
          Timetable
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/map">
      <div class="button">
        <img
          src="~/assets/map_icon.svg"
          alt="Map"
        />
        <div class="text">
          Map
        </div>
      </div>
    </NuxtLink>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  background-color: var(--black2);
}
.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 25rem;
  margin: 20px auto;
  border-radius: 10px;
  background-color: var(--black1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.text {
  opacity: 0;
}
.button:hover > .text {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  font-size: 2rem;
  color: var(--white);
}
</style>