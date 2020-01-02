package org.terrehostile.player.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "stocks")
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stockId;

	@OneToOne
	private Town town;

	private int wood;
	private int stone;
	private int gold;

	public Stock() {
		this.wood = 0;
		this.stone = 0;
		this.gold = 0;
	}

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

}
