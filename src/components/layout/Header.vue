<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻  Vue JS Music
            .nav-right.nav-menu

    .hero-body
      .container.has-text-centered
        h1.title Vue JS Music
        h2.subtitle Canciones de Spotify!
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: { PmPlayer }
}

</script>
