export interface User {
    uiId: string;
    uiPwd: string;
    token?: string; // ? 쓰면 파라미터가 있어도 되고 없어도되고.. | 는 둘중에하나..
    uiBirth?: string;
    uiCredat?: string;
    uiCretim?: string;
    uiEmail?: string;
    uiGender?: string;
    uiGrade?: string;
    uiLmodat?: string;
    uiLmotim?: string;
    uiName?: string;
    uiNum?: number,
    uiPhone?: string;
    username?: string;
}