import Desk from "../models/Desk";

export const mainController = (req, res) => {
    res.render("global/main");
};

export const resultController = async (req, res) => {
    const { c, w, h } = req.query

    if (c === "--선택--" || w === "--선택--" || h === "--선택--") {
        res.render("global/main", { errorMsg: "색깔, 세로, 가로 를 선택하세요." });
    } else {
        try {
            const DeskList = await Desk.find({
                color: c,
                width: parseInt(w),
                height: parseInt(h),
            }, {});
            console.log(DeskList)
            res.render("global/result", { list: DeskList });
        } catch (e) {
            console.log(e);
            mainController(req, res);
        }
    }
};