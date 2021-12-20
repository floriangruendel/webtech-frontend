<template>
<h1>Welcome to Show</h1>
  <ul class="list-group list-group-flush">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="levy in levies" :key="levy.id">
        <li class="list-group-item">{{ leviy.title }}</li>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
      levies: [
        {
          id: 1,
          title: 'Abgabe 11',
          discription: 'Das ist der 1. Test',
          modul: 'webtech',
          deadline: '25-04-1022',
          importance: 'wichtig'
        },
        {
          id: 2,
          title: 'Abgabe 2',
          discription: 'Das ist der 2. Test',
          modul: 'webtech',
          deadline: '25-04-1022',
          importance: 'wichtig'
        },
        {
          id: 3,
          title: 'Abgabe 3',
          discription: 'Das ist der 3. Test',
          modul: 'webtech',
          deadline: '25-04-1022',
          importance: 'wichtig'
        },
        {
          id: 4,
          title: 'Abgabe 4',
          discription: 'Das ist der 4. Test',
          modul: 'webtech',
          deadline: '25-04-1022',
          importance: 'wichtig'
        },
        {
          id: 5,
          title: 'Abgabe 5',
          discription: 'Das ist der 5. Test',
          modul: 'webtech',
          deadline: '25-04-1022',
          importance: 'wichtig'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
