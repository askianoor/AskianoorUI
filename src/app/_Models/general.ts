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

export interface Skill {
    SkillId: string;
    Name: string;
    Level: number;
    cssClass: string;
    group: number;
}

export interface Education {
    educationTitle: string;
    universityTitle: string;
    universityAddress: string;
    universityPlace: string;
    degree: string;
    description: string;
    year: string;
    icon: string;
}

export interface Experience {
    jobTitle: string;
    companyTitle: string;
    companyAddress: string;
    description: string;
    year: string;
    icon: string;
}
