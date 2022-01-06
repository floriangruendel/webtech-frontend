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
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight2">Edit</button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRight2Label">
            <div class="offcanvas-header">
              <h5 id="offcanvasRight2Label">Edit TODO</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <form class="test-start needs-validation" novalidate>
                <input class="form-control" type="text" placeholder="Title" aria-label="default input example" v-model="title" required>
                <div class="invalid-feedback" align="left">
                  Please provide a title.
                </div>
                <br>
                <input class="form-control" type="text" placeholder="Discription" aria-label="default input example" v-model="discription" required>
                <div class="invalid-feedback" align="left">
                  Please provide a discription.
                </div>
                <br>
                <input class="form-control" type="text" placeholder="Modul" aria-label="default input example" v-model="modul" required>
                <div class="invalid-feedback" align="left">
                  Please provide a modul.
                </div>
                <br>
                <input class="form-control" type="text" placeholder="Deadline (yyyy-mm-dd)" aria-label="default input example" v-model="deadline" required>
                <div class="invalid-feedback" align="left">
                  Please provide a deadline.
                </div>
                <br>
                <button class="btn btn-outline-success me-3" type="submit" @click="updateLevy(levy.id)">Confirm</button>
              </form>
            </div>
          </div>
          <i>&nbsp;</i>
          <button type="button" class="btn btn-outline-danger" @click="deleteLevy(levy.id)">Delete</button>
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
      <form class="test-start needs-validation" novalidate>
        <input class="form-control" type="text" placeholder="Title" aria-label="default input example" v-model="title" required>
        <div class="invalid-feedback" align="left">
          Please provide a title.
        </div>
        <br>
        <input class="form-control" type="text" placeholder="Discription" aria-label="default input example" v-model="discription" required>
        <div class="invalid-feedback" align="left">
          Please provide a discription.
        </div>
        <br>
        <input class="form-control" type="text" placeholder="Modul" aria-label="default input example" v-model="modul" required>
        <div class="invalid-feedback" align="left">
          Please provide a modul.
        </div>
        <br>
        <input class="form-control" type="text" placeholder="Deadline (yyyy-mm-dd)" aria-label="default input example" v-model="deadline" required>
        <div class="invalid-feedback" align="left">
          Please provide a deadline.
        </div>
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
      const valid = this.validate()
      if (valid) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const payload = JSON.stringify({
          title: this.title,
          discription: this.discription,
          modul: this.modul,
          deadline: this.deadline,
          importance: 'normal'
        })
        const endpoint = 'http://localhost:8080/api/v1/levies'
        //  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies'
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
    },
    updateLevy (id) {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        title: this.title,
        discription: this.discription,
        modul: this.modul,
        deadline: this.deadline,
        importance: 'normal'
      })

      const endpoint = 'http://localhost:8080/api/v1/levies/' + id
      //  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/levies/' + id
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          }, false)
        })
      return valid
    }
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
</script>

<style scoped>

</style>
