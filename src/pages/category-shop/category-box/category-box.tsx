import { useContext } from "react"
import { CategoryShopContext } from "../category-shop-context"
import { CategoryBoxMenu } from "../category-box-menu/category-box-menu";
import { CategoryDialog } from "../category-box-menu/category-box-menu-dialog";
import React from "react";


const CategoryBox = () => {
    const { breakpointView } = useContext(CategoryShopContext);
    return breakpointView ? <CategoryBoxMenu/> : <CategoryDialog /> 
}

export default CategoryBox