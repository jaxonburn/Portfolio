<template>
  <q-scroll-area       :thumb-style="thumbStyle"
                       :bar-style="barStyle"
                       style="height: 450px; max-width: 100%;">
    <q-timeline :layout="layout" color="primary" class="q-px-lg">
      <q-timeline-entry heading>
        Experience TimeLine
      </q-timeline-entry>

      <q-timeline-entry
        title="Code to Success BootCamp"
        subtitle="June 10th, 2019"
        side="left"
        icon="fas fa-play"
      >
        <div>
          My first introduction to coding. Through my high school I discovered a free coding bootcamp being done through Bottega. In the bootcamp I was introduced to html,css,javascript, and even react to make a portfolio.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Mountainland Technical College Program Began"
        subtitle="August 20th, 2019"
        side="right"
        icon="fas fa-school"
      >
        <div>
          After taking a coding bootcamp I was able to apply to be in MTECH(Mountainland Technical College)'s web programming and development program. To which I was accepted where I began learning more in depth of web fundamentals.
        </div>
      </q-timeline-entry>


      <q-timeline-entry
        title="Graduation"
        subtitle="May 28, 2020"
        side="left"
        icon="fas fa-graduation-cap"
      >
        <div>
          After 663 hours of in classroom coding time, I graduated from MTECH and high school. Part of completing the program was 240 hours of interning at a company. So I began my search to find an externship where I could really see what development was like on real projects.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Began my internship at Ionrev"
        subtitle="June 4th 2020"
        side="right"
        icon="fas fa-building"
      >
        <div>
          Shortly after I began my first interning fulltime at a small startup in Pleasant Grove called Ionrev. They began by having me learn Vue.js, Feathers.js(a express wrapper), and MongoDB. I spent half of my time learning and shadowing, and the other half helping develop their web apps.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Officially Hired"
        subtitle="August 4, 2020"
        side="left"
        icon="fas fa-briefcase"
      >
        <div>
          After two months and completion of my 240 hours to successfully finish the MTECH program, I was officially hired on as a fullstack developer. From there I've worked on a variety of projects mostly focusing on front-end with some back-end.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="University of Utah Enrollment"
        subtitle="April 10th, 2021"
        side="right"
        icon="fas fa-university"
      >
        <div>
          After working for nearly a year, I decided I wanted to go back to school to get a continued education in computer science. I applied and was accepted to the University of Utah.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Currently"
        side="right"
      >
        <div>
          That leads us to today. I am still currently working for Ionrev and am planning on attending the University of Utah this fall!
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-scroll-area>
</template>

<script>
  export default {
    name: 'TimeLine',
    data(){
      return {
        thumbStyle: {
          right: '4px',
          borderRadius: '5px',
          backgroundColor: '#027be3',
          width: '5px',
          opacity: 0.75
        },

        barStyle: {
          right: '2px',
          borderRadius: '9px',
          backgroundColor: '#027be3',
          width: '9px',
          opacity: 0.2
        }
      }
    },
    computed: {
      layout () {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
      }
    }
  };
</script>

<style scoped>

</style>
