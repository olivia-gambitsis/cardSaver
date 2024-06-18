import {create} from 'zustand';

interface StepperState{
     currentStep: number;
     setCurrentStep: (step: number) => void;
}

export const useStepperStore = create<StepperState>((set) => ({
    currentStep: 0,
    setCurrentStep: (step) => set((state) => ({ currentStep: step }))
}));