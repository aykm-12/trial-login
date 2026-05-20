export interface Intern {
    id: number;
    name: string;
    attendance_count: number;
    updated_at: string;
}

export interface CheckInResponse {
    success: boolean;
    intern: Intern;
    is_celebration: boolean;
    message: string;
}

export interface MonthlyRanking {
    intern_id: number;
    name: string;
    monthly_count: number;
}
