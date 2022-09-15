<template>
  <header class="bg-light-green text-black">
    <nav
      class="container py-5 px-10 flex flex-col gap-4 items-center sm:flex-row"
    >
      <div class="flex-items-center gap-x-4">
        <img
          class="object-contain h-20 w-20"
          src="../assets/img/logo.png"
          alt="logo"
        />
      </div>
      <h1 class="text-4xl text-black font-mono">Workout-App</h1>
      <ul class="flex flex-1 justify-end gap-x-10">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>
