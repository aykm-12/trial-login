<script setup lang="ts">
import { onMounted } from 'vue';
import { useAttendanceStore } from '../stores/useAttendanceStore';

const store = useAttendanceStore();

onMounted(() => {
    store.fetchInterns();
});
</script>

<template>
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-100 relative">

        <div v-if="store.showEffect" class="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50 transition-all animate-fade-in">
            <div class="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4 animate-bounce">
                <span class="text-6xl">👑</span>
                <h2 class="text-3xl font-black text-amber-500 mt-4">殿堂入り間近！？</h2>
                <p class="text-xl font-bold text-slate-700 mt-2">{{ store.effectMessage }}</p>
                <p class="text-sm text-slate-500 mt-4">オフィスの主への道が着実に近づいています！</p>
            </div>
        </div>

        <h1 class="text-2xl font-black text-center text-indigo-600 mb-6 flex items-center justify-center gap-2">
            <span>🏪</span> 日吉オフィス ログインボーナス
        </h1>

        <div class="mb-6">
            <label class="block text-sm font-bold text-slate-700 mb-2">誰がオフィスに到着した？</label>
            <select
                v-model="store.selectedInternId"
                class="w-full px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-800"
            >
                <option value="" disabled>インターン生を選択してください</option>
                <option v-for="intern in store.interns" :key="intern.id" :value="intern.id">
                    {{ intern.name }} (現在: {{ intern.attendance_count }}回)
                </option>
            </select>
        </div>

        <div v-if="store.currentIntern" class="space-y-6 transition-all">
            <div class="bg-indigo-50 rounded-2xl p-4 border border-indigo-100 text-center">
                <p class="text-xs text-indigo-500 font-bold uppercase tracking-wider">Welcome Back</p>
                <h2 class="text-xl font-black text-slate-800 mt-1">{{ store.currentIntern.name }}</h2>
                <div class="mt-2 text-slate-600">
                    通算出社回数: <span class="text-3xl font-black text-indigo-600">{{ store.currentIntern.attendance_count }}</span> 回
                </div>
            </div>

            <div>
                <h3 class="text-sm font-bold text-slate-700 mb-3 flex items-center gap-1">
                    <span>🎫</span> 出社スタンプカード
                </h3>
                <div class="grid grid-cols-5 gap-3">
                    <div
                        v-for="i in 10"
                        :key="i"
                        :class="[
              'aspect-square rounded-xl flex flex-col items-center justify-center border-2 text-xs font-bold transition-all',
              store.currentIntern.attendance_count >= i
                ? 'bg-amber-100 border-amber-400 text-amber-700 scale-105 shadow-sm'
                : 'bg-slate-50 border-slate-200 text-slate-400 border-dashed'
            ]"
                    >
                        <span>{{ i }}回</span>
                        <span v-if="store.currentIntern.attendance_count >= i" class="text-lg mt-0.5">🔥</span>
                        <span v-else-if="[3, 5, 10].includes(i)" class="text-[10px] text-indigo-400 font-black">🎁</span>
                    </div>
                </div>
            </div>

            <button
                @click="store.checkIn"
                class="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-black py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all text-lg flex items-center justify-center gap-2"
            >
                <span>🎯</span> ラズパイにタッチする！
            </button>
        </div>

        <div v-else class="text-center py-8 text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
            <p class="text-sm">インターン生を選択すると、<br>スタンプカードが表示されます。</p>
        </div>

    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}
</style>
