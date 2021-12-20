<template>
<h1>Welcome to Show</h1>
  <ul class="list-group list-group-flush">
    <div class="row row-cols-1 row-cols-md-1 g-1">
      <div class="col" v-for="levy in levies" :key="levy.id">
        <li class="list-group-item">{{ levy.title }}</li>
      </div>
    </div>
  </ul>
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
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://webtech-uniabgaben.herokuapp.com/api/v1/levies', requestOptions)
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
