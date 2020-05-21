import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../util/Header/header";
import { RegisterButton } from "../../util/Style/global";
import { DeletePage } from "./style";
import api from "../../services/requestAPI";
import RegexCnpj from "../../util/Regex/regexCnpj";
import ResetInitialValues from "../../util/ResetsFormik/initialValues";

toast.configure();

export default function DeleteStore() {
	const history = useHistory();

	const handleSubmit = async (values) => {
		const newCnpj = RegexCnpj(values.cnpj);

		try {
			if (newCnpj.length < 14) {
				toast.error("CNPJ Inválido", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				await api.delete(`/store/${values.cnpj}`);

				toast.success("Loja deletada com sucesso!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				if (sessionStorage.getItem("permission") === "project") {
					history.push("/homeproject");
				} else if (sessionStorage.getItem("permission") === "master") {
					history.push("/homemaster");
				} else if (sessionStorage.getItem("permission") === "search") {
					history.push("/homesearch");
				} else if (sessionStorage.getItem("permission") === "cloud") {
					history.push("/homecloud");
				}
			}
		} catch (erro) {
			toast.error(erro.response.data.error, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	const validations = yup.object().shape({
		cnpj: yup
			.string()
			.length(14, "O CNPJ são de 14 digítos")
			.required("CNPJ obrigatório"),
	});

	return (
		<DeletePage>
			<Header />
			<section className="delete-container">
				<h2>Excluir loja</h2>
				<Formik
					initialValues={ResetInitialValues}
					onSubmit={handleSubmit}
					validationSchema={validations}
				>
					{({ dirty, isValid }) => {
						const submitIsValid = !dirty || !isValid;

						return (
							<Form className="delete-container__form">
								<div className="delete-container__form__group">
									<ErrorMessage name="cnpj" component="span" />
									<Field
										name="cnpj"
										placeholder="CNPJ:"
										type="text"
										className="delete-container__form__cnpj"
									></Field>
									<p className="delete-container__form__cnpjIcon"></p>
								</div>
								<div className="delete-container__form__buttons">
									<RegisterButton type="submit" disabled={submitIsValid}>
										Excluir loja
									</RegisterButton>
									<RegisterButton
										onClick={() => {
											if (sessionStorage.getItem("permission") === "project") {
												history.push("/homeproject");
											} else if (
												sessionStorage.getItem("permission") === "master"
											) {
												history.push("/homemaster");
											} else if (
												sessionStorage.getItem("permission") === "search"
											) {
												history.push("/homesearch");
											} else if (
												sessionStorage.getItem("permission") === "cloud"
											) {
												history.push("/homecloud");
											}
										}}
									>
										Voltar
									</RegisterButton>
								</div>
							</Form>
						);
					}}
				</Formik>
			</section>
			<section className="delete-style"></section>
		</DeletePage>
	);
}
