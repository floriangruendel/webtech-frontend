<template>
<h1>Your TODOs</h1>

  <ul class="list-group">
    <div class="row row-cols-1 row-cols-md-1 g-1">
      <div class="col" v-for="levy in levies" :key="levy.id">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ levy.title }}</h5>
            <small>{{ levy.deadline }}</small>
          </div>
          <p class="mb-1">{{ levy.discription }}</p>
          <small>{{ levy.modul }}</small>
        </a>
      </div>
    </div>
  </ul>

  <p></p>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Add new TODO</button>

  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Add new TODO</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small">
      ...
    </div>
  </div>
  <p></p>
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
      levies: []
    }
  },
  mounted () {
    // const endpoint = 'http://localhost:8080/api/v1/levies'
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
