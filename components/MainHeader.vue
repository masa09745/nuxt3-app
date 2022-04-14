<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center text-white text-2xl">
            Airline Management System
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure} from '@headlessui/vue'

export default {
  components: {
    Disclosure,
  },
}
</script>

