import { useContext } from "react"
import { CategoryShopContext } from "../categories-shop-context"
import { CategoryBoxMenu } from "../categories-box-menu/categories-box-menu";
import { CategoryDialog } from "../categories-box-menu/categories-box-menu-dialog";

const CategoryBox = () => {
    const { breakpointView } = useContext(CategoryShopContext);
    return breakpointView ? <CategoryBoxMenu/> : <CategoryDialog /> 
}

export default CategoryBox