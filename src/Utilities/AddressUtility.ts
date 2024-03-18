import { useEffect, useState } from "react";
import AddressModel from "../Model/AddressModel";
import { useNavigate } from "react-router-dom";
import { CreateAddressInfo, UpdateAddressnfoAsync, getAddressInfoById } from "../Services/AddressInfoService";

interface Errors {
    address?: string;
    city?: string;
    stateId?: string;
    countryId?: string;
}

export default function AddressUtility(id: number) {
    const navigate = useNavigate();
    const initialValue: AddressModel = {
        address: "",
        city: "",
        stateId: 0,
        countryId: 0,
        id: id,
        userId: 1
    };

    const [addressInfo, setAddressInfo] = useState<AddressModel>(initialValue);
    const [errors, setErrors] = useState<Errors>({});

    useEffect(() => {
        async function fetchData() {
            try {
                if (id > 0) {
                    const response = await getAddressInfoById(id);
                    if (response.data) {
                        setAddressInfo(response.data);
                    }
                }
            } catch (error) {
                console.error('Error fetching Address information:', error);
            }
        }

        fetchData();

    }, [id]);

    const validateFields = () => {
        const { address, city, stateId, countryId } = addressInfo;
        const newErrors: Errors = {};

        if (!address.trim()) {
            newErrors.address = "Address is required";
        }

        if (!city.trim()) {
            newErrors.city = "City is required";
        }

        if (stateId === 0) {
            newErrors.stateId = "Please select a state";
        }

        if (countryId === 0) {
            newErrors.countryId = "Please select a country";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSaveAddress = async () => {
        if (validateFields()) {
            try {
                if (addressInfo.id !== 0) {
                    await UpdateAddressnfoAsync(addressInfo, addressInfo.id);
                    alert("Address updated successfully.");
                } else {
                    await CreateAddressInfo(addressInfo);
                    alert("New Address created successfully.");
                }
                setAddressInfo(initialValue);
                navigate("/showlist");
            } catch (error) {
                console.error('Error saving Address:', error);
            }
        }
    };

    const onInputChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setAddressInfo(prev => ({ ...prev, [name]: value }));
    };

    const onTextAreaChangeAddress = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setAddressInfo(prev => ({ ...prev, [name]: value }));
    };

    const onSelectFieldChangeAddress = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.currentTarget;
        setAddressInfo(prev => ({ ...prev, [name]: parseInt(value) }));
    };

    const handelShowList = () => {
        navigate("/showlist");
    };

    return {
        handelShowList,
        onSelectFieldChangeAddress,
        addressInfo,
        setAddressInfo,
        onSaveAddress,
        onInputChangeAddress,
        onTextAreaChangeAddress,
        errors
    };
}
