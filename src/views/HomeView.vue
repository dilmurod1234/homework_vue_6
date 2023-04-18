<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-2">
        <appModal v-model="dialog">
          <h2 class="mb-3">Add User</h2>
          <form @submit="handleSubmit" id="form">
            <input v-model="name" class="form-control my-2" type="text" placeholder="Enter your name..." required>
            <input v-model="age" class="form-control my-2" type="number" placeholder="Enter your age..." required>
            <input v-model="email" class="form-control my-2" type="email" placeholder="Enter your email..." required>
            <input v-model="address" class="form-control my-2" type="text" placeholder="Enter your address..." required>
          </form>
          <button class="btn btn-info text-white" form="form" @click="dialog = false">Save</button>
        </appModal>
        <appModal v-model="modal">
          <div class="card">
            <div class="card-header">
              <h2>O'chirishga rozimisan ?</h2>
            </div>
            <div class="card-body">
              <button class="btn btn-success mx-2" @click="modal = false">Yo'q</button>
              <button class="btn btn-danger mx-2" @click="deleteUser">Ha</button>
            </div>
          </div>
        </appModal>
        <button class="btn btn-success my-3" @click="dialog = true">Add User</button>
        <table class="table table-hovered table-striped table-bordered">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in users" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.address }}</td>
              <td>
                <button class="btn btn-danger" @click="()=> openDelModal(item.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import appModal from '@/components/ui/app-modal.vue';
const store = useStore()
const dialog = ref(false)
const modal = ref(false)
const itemId = ref()
const name = ref()
const age = ref()
const email = ref()
const address = ref()

const users = computed(()=> {
  return store.getters.getUsers
})

const handleSubmit = (evt) => {
  evt.preventDefault();
  let nameValue = name.value
  let ageValue = age.value
  let emailValue = email.value  
  let addressValue = address.value
  let value = {name: nameValue, age: ageValue, email: emailValue, address: addressValue}
  store.dispatch("handleSubmit", {value})
  name.value = ""
  age.value = ""
  email.value = ""
  address.value = ""
}

const openDelModal = (id) => {
  modal.value = true
  itemId.value = id
}

const deleteUser = () => {
  users.value.splice(itemId, 1)
  modal.value = false
}

</script>
