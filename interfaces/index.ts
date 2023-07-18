export interface LoginDTO {
    password: string;
    email: string;
}
export interface UserDTO {
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    mobile: string;
    password: string;
    userId: number;
}

export interface GiftCardDTO {
    aboutGiftCard: string;
    amount: number;
    brandList: string;
    giftCardId: number;
    giftCardName: string;
}

export interface GiftCardOrderDTO {
    delivaryType: string;
    giftCard: GiftCardDTO;
    giftCardIssueDate: string;
    recipientsEmail: string;
    recipientsMobileNumber: string;
    recipientsName: string;
    reloadable: boolean;
    scheduledelivaryDate: string;
    userId: number;
}