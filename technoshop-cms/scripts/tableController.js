import { tableGoods } from "./elems.js";
import { modalController } from "./modalController.js";
import { getGoods } from "./service.js";
import { tableRender } from "./tableViewer.js";

export const tableController = async () => {
    modalController({
        delegation: {
            parent: tableGoods,
            target: ".table-goods-row",
            targetExclude: ".btn-delete",
        },
    });

    const goods = await getGoods();

    tableRender(goods);
};
