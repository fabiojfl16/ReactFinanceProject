import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-name?query=${query}&limit=5&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=5&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=5&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}

export const getGetCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=5&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message:', error.message);
            return error.message;
        }
        else {
            console.log('Unexpected error');
        }
    }
}