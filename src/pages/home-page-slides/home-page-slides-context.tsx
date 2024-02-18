import { PropsContextModel } from "../../model/props-context-model.tsx";
import slider1 from "../../assets/slider-component/slider1.png";
import slider2 from "../../assets/slider-component/slider2.png";
import slider3 from "../../assets/slider-component/slider3.png";
import {Dispatch, createContext, useState} from "react";
export interface CarouselModel {
    key: number;
    imageName: string;
    nameOfTheCafe: string;
    mainTitle: string;
    buttonName: string;
}

interface SlidesContextModel {
    carouselArr: CarouselModel[];
    idxObj:number,
    setIdxObj:Dispatch<React.SetStateAction<number>>
}

export const SlidesContext = createContext({} as SlidesContextModel);

export const SlidesProvider = ({ children }: PropsContextModel) => {
    const [idxObj, setIdxObj] = useState<number>(0);

    const carouselArr: CarouselModel[] = [
        {
            key:0,
            imageName: slider1,
            nameOfTheCafe: "Bean Nook",
            mainTitle: "Udoskonal swoje kawowe rytuały z naszymi akcesoriami.",
            buttonName: "Kup Akcesoria",
        },
        {
            key:1,
            imageName: slider2,
            nameOfTheCafe: "Bean Nook",
            mainTitle: "Aromatyczne ukojenie dla Twoich zmysłów",
            buttonName: "Kup Kawę",
        },
        {
            key:2,
            imageName: slider3,
            nameOfTheCafe: "Bean Nook",
            mainTitle: "Twoje Magiczne Miejsce na Chwilę Rozkoszy",
            buttonName: "Odwiedź Naszą Kawiarnię",
        },
    ];
    return (

        <SlidesContext.Provider value={{ carouselArr, idxObj, setIdxObj}}>
            {children}
        </SlidesContext.Provider>
    );
};