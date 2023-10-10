import { create } from 'zustand';

interface MobileMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMobilMenu = create<MobileMenuStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMobilMenu;
