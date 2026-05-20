<script setup lang="ts">
import type { MonthlyRanking } from '../../types/attendance';

defineProps<{
    item: MonthlyRanking;
    index: number;
}>();

// 順位に応じたバッジの装飾を返す
const getRankBadgeClass = (index: number) => {
    if (index === 0) return 'bg-amber-500 text-white'; // 1位: 金
    if (index === 1) return 'bg-slate-400 text-white'; // 2位: 銀
    if (index === 2) return 'bg-amber-700 text-white'; // 3位: 銅
    return 'bg-slate-100 text-slate-500';
};
</script>

<template>
    <div
        :class="[
      'flex items-center justify-between p-3 rounded-xl border transition-all duration-300',
      index === 0 ? 'bg-amber-50/40 border-amber-200 shadow-sm' : 'bg-slate-50 border-slate-100'
    ]"
    >
        <div class="flex items-center gap-3">
      <span
          :class="[
          'w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black font-mono',
          getRankBadgeClass(index)
        ]"
      >
        {{ index + 1 }}
      </span>

            <span class="font-bold text-slate-700">{{ item.name }}</span>
        </div>

        <div class="flex items-baseline gap-1">
      <span
          :class="[
          'font-black text-xl font-mono',
          index === 0 ? 'text-amber-600' : 'text-slate-700'
        ]"
      >
        {{ item.monthly_count }}
      </span>
            <span class="text-[10px] text-slate-400 font-bold">回</span>

            <span v-if="index === 0" class="text-sm ml-1">👑</span>
        </div>
    </div>
</template>

<style scoped>

</style>
