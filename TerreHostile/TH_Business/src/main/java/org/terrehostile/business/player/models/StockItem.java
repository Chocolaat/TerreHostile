package org.terrehostile.business.player.models;

public class StockItem {

	private int quantity;
	private StockItemType type;

	public StockItem(StockItemType type) {
		this.quantity = 0;
		this.type = type;
	}

	public StockItem(StockItemType type, int quantity) {
		this.quantity = quantity;
		this.type = type;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public StockItemType getType() {
		return type;
	}

	public void setType(StockItemType type) {
		this.type = type;
	}

	public void add(int n) {
		this.quantity += n;
	}

	public boolean use(int n) {
		if (this.quantity - n >= 0) {
			this.quantity -= n;
			return true;
		}
		return false;
	}

}
