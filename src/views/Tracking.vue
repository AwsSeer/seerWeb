<template>
  <div v-if="loaded">
    <div class="row">
      <div class="col-4 p-shadow-4 fullscreen">
        <div
          class="card theme-light"
          v-for="people in trackingInfo"
          :key="people.email"
          v-bind:class="{selected: people.isSelected}"
          v-on:click="() => selectPerson(people.email)"
        >
          <div class="card-title">{{ people.email }}</div>
          <div class="card-text">
            <div>{{ people.name }}</div>
          </div>
        </div>
      </div>
      <div class="col-8 p-shadow-4 fullscreen">
        <Map :markers="trackingInfo" :triggerOnClick="selectPerson" :deselect="deSelectMarkers" />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="fullscreen">
      <progress-spinner />
    </div>
  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
import Map from '@/components/Map.vue';
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    Map,
    ProgressSpinner,
  },
  computed: {
    ...mapState({
      loaded: (state) => state.tracking.loaded,
      trackingInfo: (state) => state.tracking.trackingInfo,
    }),
  },
  methods: {
    ...mapActions('tracking', ['getPeopleInformation', 'selectPerson']),
    ...mapMutations('tracking', ['deSelectMarkers']),
    ...mapActions(['movingFromTab']),
  },
  mounted() {
    this.getPeopleInformation();
  },
  unmounted() {
    this.movingFromTab({ tabName: 'tracking', itemId: 'getPeopleInformation' }); // id has to be given in full
  },
};
</script>

<style scoped>
.row {
  margin: 5px;
  padding: 5px;
}
.fullscreen {
  height: 80vh;
}
.selected {
  background-color: blueviolet;
  color: antiquewhite;
}
</style>
