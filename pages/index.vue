<template>
  <div class="flex flex-grow items-center mx-auto">
    <div class="flex flex-col mx-auto rounded-lg shadow py-8 px-10">
      <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Login To Your Account
      </div>

      <form action="#" method="POST">
        <div class="py-4 px-5">
          <div class="grid grid-cols-12 gap-7">
            <div class="col-span-full">
              <label for="employee-number" class="block text-md font-medium text-gray-700">社員番号</label>
              <input type="text" autocomplete="off" name="employee-number" id="employee" class="mt-1 block form-control px-3 py-1.5 w-full shadow-sm rounded-md border border-solid border-gray-300" />
            </div>
            <div class="col-span-full">
              <label for="password" class="block text-md font-medium text-gray-700">パスワード</label>
              <input type="password" autocomplete="off" name="password" id="password" class="mt-1 block form-control px-3 py-1.5 w-full shadow-sm rounded-md border border-solid border-gray-300"  />
            </div>
          </div>
        </div>
        <div class="py-4 px-5 text-right ">
          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white">ログイン</button>

        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "top-page",
  });

</script>