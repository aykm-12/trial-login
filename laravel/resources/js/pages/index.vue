<script setup lang="ts">
import Welcome from "../features/Welcome.vue";
import AttendancePage from "@/features/attendances/components/AttendancePage.vue";
import MonthlyRankingCard from "@/features/attendances/components/MonthlyRanking/MonthlyRankingCard.vue";
import SimpleLayout from "@/layouts/SimpleLayout.vue";
</script>

<template>
<!--  <Welcome />-->
    <SimpleLayout>
        <AttendancePage />
        <MonthlyRankingCard />
    </SimpleLayout>
</template>
