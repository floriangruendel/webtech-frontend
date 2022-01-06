<template>
<h1>Your TODOs</h1>

  <ul class="list-group">
    <div class="row row-cols-1 row-cols-md-1 g-1">
      <div class="col" v-for="levy in levies" :key="levy.id">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h2 class="mb-1">{{ levy.title }}</h2>
            <small>{{ levy.deadline }}</small>
          </div>
          <p style="font-size:18px" class="mb-1" align="left">{{ levy.discription }}</p>
          <p style="font-size:13px" class="mb-1" align="left">{{ levy.modul }}</p>
          <button type="button" class="btn btn-outline-secondary">Edit</button>
          <i>&nbsp;</i>
          <button type="button" class="btn btn-outline-danger">Delete</button>
        </a>
      </div>
    </div>
  </ul>

  <p></p>

  <div class="d-grid gap-2 col-4 mx-auto">
    <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">New TODO</button>
  </div>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Create new TODO</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="test-start">
        <input class="form-control" type="text" placeholder="Title" aria-label="default input example" v-model="title">
        <br>
        <input class="form-control" type="text" placeholder="Discription" aria-label="default input example" v-model="discription">
        <br>
        <input class="form-control" type="text" placeholder="Modul" aria-label="default input example" v-model="modul">
        <br>
        <input class="form-control" type="text" placeholder="Deadline (yyyy-mm-dd)" aria-label="default input example" v-model="deadline">
        <br>
        <button class="btn btn-outline-success me-3" type="submit" @click="createLevy">Create</button>
      </form>
    </div>
  </div>
  <p></p>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      levies: [],
      title: '',
      discription: '',
      modul: '',
      deadline: ''
    }
  },
  methods: {
    createLevy () {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        title: this.title,
        discription: this.discription,
        modul: this.modul,
        deadline: this.deadline,
        importance: 'normal'
      })

      //  const endpoint = 'http://localhost:8080/api/v1/levies'
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies'
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    //  const endpoint = 'http://localhost:8080/api/v1/levies'
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(levy => {
        this.levies.push(levy)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
