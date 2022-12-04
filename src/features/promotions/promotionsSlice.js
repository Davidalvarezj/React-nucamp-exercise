import { PROMOTIONS } from "../../app/shared/PROMOTIONS";






export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((elm) => elm.featured);
};