import { tableGoods } from "./elems.js";
import { modalController } from "./modalController.js";
import { getGoods, deleteGoods } from "./service.js";
import { tableRender } from "./tableViewer.js";

export const tableController = async () => {
    modalController({
        delegation: {
            parent: tableGoods,
            target: ".table-goods-row",
            targetExclude: ".btn-delete",
        },
    });

    tableGoods.addEventListener('click', async ({ target }) => {
        const delBtn = target.closest('.btn-delete');
        if (delBtn) {
            const row = delBtn.closest('.table-goods-row');
            const isDel = await deleteGoods(row.dataset.id);

            if (isDel) {
                row.remove();
            }
        }
    })

    const goods = await getGoods();

    tableRender(goods);
};
