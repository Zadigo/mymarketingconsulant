<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2">
      <slot name="icon" />
    </div>

    <div class="col-span-10">
      <slot name="content" />
    </div>
  </div>
</template>
