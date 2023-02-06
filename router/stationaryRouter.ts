import {Router} from "express"

import { gettingData, postData } from "../controller/stationaryContoller";

const router = Router()

router.route("/gradData").get(gettingData);
router.route("/creatingData").post(postData);

export default router