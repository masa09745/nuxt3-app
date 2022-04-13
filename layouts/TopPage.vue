<template>
  <div>
    <MainHeader />
      <div class="container max-w-lg m-auto p-10">
        <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
          <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
            Login To Your Account
          </div>

          <form action="#" method="POST">
            <div class="px-4 py-5">
              <div class="grid grid-cols-12 gap-6">
                <div class="col-span-full">
                  <label for="employee-number" class="block text-md font-medium text-gray-700">社員番号</label>
                  <input type="text" name="employee-number" id="employee" class="mt-1 block form-control px-3 py-1.5 w-full shadow-sm rounded-md border border-solid border-gray-300" />
                </div>
                <div class="col-span-full">
                  <label for="password" class="block text-md font-medium text-gray-700">パスワード</label>
                  <input type="password" name="email-address" id="email-address" class="mt-1 block form-control px-3 py-1.5 w-full shadow-sm rounded-md border border-solid border-gray-300" />
                </div>
              </div>
            </div>
            <div class="py-4 px-3 text-right ">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white">ログイン</button>

            </div>
          </form>
        </div>
      </div>

    <MainFooter />
  </div>
</template>