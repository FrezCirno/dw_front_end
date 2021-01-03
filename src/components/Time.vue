<template>
  <div class="time" style="width: 100%">
    <el-progress
      class="progress"
      :stroke-width="20"
      :percentage="usedtime.mysql"
      :format="format('MySQL')"
    />
    <el-progress
      class="progress"
      :stroke-width="20"
      :percentage="usedtime.neo4j"
      color="rgba(142, 113, 199, 0.7)"
      :format="format('Neo4J')"
    />
    <el-progress
      class="progress"
      :stroke-width="20"
      :percentage="usedtime.hive"
      :format="format('Hive')"
    />
  </div>
</template>

<script>
export default {
  props: ["usedtime"],
  methods: {
    format(db) {
      return (percentage) => db + " " + percentage + "ms";
    },
  },
};
</script>

<style>
.time > * {
  margin: 20px 0;
}
.el-progress-bar {
  width: 85%;
}
</style>

