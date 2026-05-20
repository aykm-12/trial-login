import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { attendanceApi } from '../apis/attendanceApi';
import type { Intern, MonthlyRanking } from '../types/attendance';

export const useAttendanceStore = defineStore('attendance', () => {
    const interns = ref<Intern[]>([]);
    const selectedInternId = ref<number | ''>('');
    const showEffect = ref<boolean>(false);
    const effectMessage = ref<string>('');

    // 🆕 月次ランキングデータ（MVP用の初期データ）
    const rankings = ref<MonthlyRanking[]>([
        { intern_id: 3, name: 'インターン1', monthly_count: 8 },
        { intern_id: 2, name: 'インターン2', monthly_count: 4 },
        { intern_id: 1, name: 'インターン3', monthly_count: 2 },
    ]);

    // 🆕 ランキングを出社回数が多い順に自動ソートする算出プロパティ
    const sortedRankings = computed(() => {
        return [...rankings.value].sort((a, b) => b.monthly_count - a.monthly_count);
    });

    const currentIntern = computed<Intern | undefined>(() => {
        if (selectedInternId.value === '') return undefined;
        return interns.value.find(i => i.id === selectedInternId.value);
    });

    const fetchInterns = async () => {
        try {
            interns.value = await attendanceApi.getInterns();
        } catch (error) {
            console.error('インターン一覧の取得に失敗しました', error);
        }
    };

    const checkIn = async () => {
        if (selectedInternId.value === '') return;

        try {
            const data = await attendanceApi.checkIn(selectedInternId.value);

            if (data.success) {
                await fetchInterns();

                // 🆕 出社が成功したら、月次ランキングのカウントもリアルタイムに+1する
                const rankingTarget = rankings.value.find(r => r.intern_id === selectedInternId.value);
                if (rankingTarget) {
                    rankingTarget.monthly_count++;
                }

                if (data.is_celebration) {
                    effectMessage.value = `🎉 祝・通算 ${data.intern.attendance_count} 回出社！ 🎉`;
                    showEffect.value = true;
                    setTimeout(() => { showEffect.value = false; }, 4000);
                } else {
                    alert(data.message);
                }
            }
        } catch (error) {
            console.error('出社処理に失敗しました', error);
        }
    };

    return {
        interns,
        selectedInternId,
        showEffect,
        effectMessage,
        sortedRankings,
        currentIntern,
        fetchInterns,
        checkIn
    };
});
