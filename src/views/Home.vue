<template>
  <div class="home">
    <h3>Welcome to</h3>
    <h1 style="color:blue">My Uni Todo</h1>
    <br>
    <br>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      levies: [],
      title: '',
      discription: '',
      modul: '',
      deadline: '',
      id: 0
    }
  },
  methods: {
    safeId (id) {
      this.id = id
    },
    deleteLevy (id) {
      const endpoint = 'http://localhost:8080/api/v1/levies/' + id
      //  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies/' + id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))

      window.location.reload()
    },
    sortedLevies () {
      return this.levies.sort(function (a, b) {
        const splitA = (a.deadline + '').split('-')
        const splitB = (b.deadline + '').split('-')
        if (parseInt(splitA[0], 10) > (parseInt(splitB[0], 10))) { return 1 }
        if (parseInt(splitA[0], 10) < (parseInt(splitB[0], 10))) { return -1 } else {
          if (parseInt(splitA[1], 2) > (parseInt(splitB[1], 2))) { return 1 }
          if (parseInt(splitA[1], 2) < (parseInt(splitB[1], 2))) { return -1 } else {
            if (parseInt(splitA[2], 2) > (parseInt(splitB[2], 2))) { return 1 }
            if (parseInt(splitA[2], 2) < (parseInt(splitB[2], 2))) { return -1 } else { return 0 }
          }
        }
      })
    },
    mounted () {
      const endpoint = 'http://localhost:8080/api/v1/levies'
      //  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies'
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
}
</script>

<style scoped>

</style>
