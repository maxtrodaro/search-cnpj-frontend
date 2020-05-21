import React from "react";

export default function StoreItem({ store }) {
	function formatedData(data) {
		data = data.split(/T/g);
		let newData = data[0].substr(0, 10).split("-").reverse().join("/");

		return newData;
	}

	return (
		<li className="search-container__content__bottom__list__item">
			<p className="search-container__content__bottom__list__item__cnpj">
				{store.cnpj}
			</p>
			<p className="search-container__content__bottom__list__item__name">
				{store.name}
			</p>
			<p className="search-container__content__bottom__list__item__cod">
				{store.cod_emp}
			</p>
			<p className="search-container__content__bottom__list__item__serv">
				{store.serv_ip}
			</p>
			<p className="search-container__content__bottom__list__item__data">
				{formatedData(store.createdAt)}
			</p>
		</li>
	);
}
