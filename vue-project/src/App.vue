<template>
  <div overflow-y-scroll overflow-x-hidden h-100vh>
    <div w="100%" min-h-150px p-2 my-2 b-lightblue-3 border-gray-3 border-1>
      <div w="100%" text-bluegray-6 mb-2 text-sm font-bold>跨域请求</div>
      <div w="100%" flex flex-col gap-2>
        <Button text="用户信息" type="info" @click="send('cors_user_info')" />
        <Button
          text="列表查询"
          type="success"
          @click="send('cors_user_list')"
        />
        <Button text="用户删除" type="danger" @click="send('cors_user_del')" />
      </div>
    </div>
    <div w="100%" min-h-150px p-2 my-2 b-lightblue-3 border-gray-3 border-1>
      <div w="100%" text-bluegray-6 mb-2 text-sm font-bold>非跨域请求</div>
      <div w="100%" flex flex-col gap-2>
        <Button text="用户信息" type="info" @click="send('user_info')" />
        <Button text="列表查询" type="success" @click="send('user_list')" />
        <Button text="用户删除" type="danger" @click="send('user_del')" />
      </div>
    </div>
    <div w="100%" min-h-200px p-2 my-2 b-lightblue-3 border-gray-3 border-1>
      <textarea
        v-model="jsonData"
        w="80%"
        disabled
        rows="13"
        border-gray-3
      ></textarea>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "./components/Button.vue";
import {
  user_info,
  user_list,
  user_del,
  cors_user_info,
  cors_user_list,
  cors_user_del,
} from "./api";

const apis = {
  user_info,
  user_list,
  user_del,
  cors_user_info,
  cors_user_list,
  cors_user_del,
};

const jsonData = $ref("");
async function send(api_name: string) {
  const data = await apis[api_name]();
  jsonData = data;
}
</script>
