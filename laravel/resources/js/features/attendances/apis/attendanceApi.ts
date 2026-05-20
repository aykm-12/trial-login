import axios from 'axios';
import type { Intern, CheckInResponse } from '../types/attendance';

export const attendanceApi = {
    async getInterns(): Promise<Intern[]> {
        const response = await axios.get<Intern[]>('/api/interns'); // エンドポイントはLaravelのroute定義に合わせて調整してください
        return response.data;
    },

    async checkIn(internId: number): Promise<CheckInResponse> {
        const response = await axios.post<CheckInResponse>('/api/checkin', { intern_id: internId });
        return response.data;
    }
};
