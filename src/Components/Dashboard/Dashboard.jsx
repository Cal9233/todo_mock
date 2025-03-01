import React, { useState, useCallback } from 'react';
import "./Dashboard.css";
import { useDispatch } from 'react-redux';
import { withAuth } from '../HOC/withAuth';
import { Header } from '../Header/Header';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import { setUser, logoutUser } from '../../Store/slicers';

const DashboardBase = ({user}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userValue, setUserValue] = useState("");
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const dispatch = useDispatch();
    const title = user ? `Welcome ${user}` : "Welcome"

    const handleOnChange = useCallback((e) => {
        setUserValue(e.target.value);
    }, []);

    const handleOnSubmit = useCallback((e) => {
        e.preventDefault();
        if(userValue.trim().length > 0) {
            dispatch(setUser(userValue));
        }
    }, [userValue, dispatch]);

    const handleLogOut = useCallback(() => {
        if(user) dispatch(logoutUser())
    }, [dispatch, user]);

    return (
        <nav data-testid="dashboard">
            <Header className="dashboard-header">{title}</Header>
            <Button data-testid="modal-open-btn" className='login-btn' onClick={user ? handleLogOut : openModal}>{user ? "Logout" : "Login"}</Button>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="User Authentication">
                <Input 
                    type="text" 
                    label={user ? "" : "Login"}
                    disabled={user && true}
                    value={userValue}
                    onChange={handleOnChange}
                />
                <Button onClick={handleOnSubmit}>Submit</Button>
            </Modal>
        </nav>
    )
}

export const Dashboard = withAuth(DashboardBase);