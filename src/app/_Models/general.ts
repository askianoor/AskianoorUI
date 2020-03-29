export interface Navbar {
    menuId: string;
    menuOrder: number;
    menuName: string;
    menuPath: string;
}

export interface DashboardSettings {
    id: number;
    websiteTitle: string;
    websiteHeader: string;
    ownerName: string;
    ownerPictureSrc: string;
    aboutMeDescription: string;
    aboutMeImage: string;
    homePageImage: string;
    homePageText: string;
    footerText: string;
}
