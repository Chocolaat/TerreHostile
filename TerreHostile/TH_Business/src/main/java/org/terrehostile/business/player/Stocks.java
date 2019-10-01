package org.terrehostile.business.player;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stocks")
public class Stocks {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stockId;

	private int townId;

	private int wood;
	private int stone;
	private int gold;

//	public void addToStock(StockItem... stockitems) {
//		for (StockItem stockItem : stockitems) {
//			this.stockItems.add(stockItem);
//		}
//	}

//	public Stocks createDefaultStock() {
//		Stocks res = new Stocks();
//		res.addToStock(new StockItem(StockItemType.GOLD, 2000));
//		res.addToStock(new StockItem(StockItemType.STONE, 100));
//		res.addToStock(new StockItem(StockItemType.WOOD, 100));
//		return res;
//	}

	public int getTownId() {
		return townId;
	}

	public void setTownId(int townId) {
		this.townId = townId;
	}

	public int getWood() {
		return wood;
	}

	public void setWood(int wood) {
		this.wood = wood;
	}

	public int getStone() {
		return stone;
	}

	public void setStone(int stone) {
		this.stone = stone;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	public int getStockId() {
		return stockId;
	}

	public void setStockId(int stockId) {
		this.stockId = stockId;
	}

	@Override
	public String toString() {
		return "Stocks [stockId=" + stockId + ", townId=" + townId + ", wood=" + wood + ", stone=" + stone + ", gold="
				+ gold + "]";
	}

}
