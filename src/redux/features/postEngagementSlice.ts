import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostEngagementProps {
  name: string;
  "total_engaged/unique": string;
  acquired_subscribers: string;
  conversion_rate: string;
}
interface PostEngagementState {
  searchTerm: string;
  currentPage: number;
  deleteModal: boolean;
  renameModal: boolean;
  selectedRows: string[];
  selectAll: boolean;
  sortColumn: keyof IPostEngagementProps | null;
  sortDirection: "asc" | "desc";
}

const initialState: PostEngagementState = {
  searchTerm: "",
  currentPage: 1,
  deleteModal: false,
  renameModal: false,
  selectedRows: [],
  selectAll: false,
  sortColumn: null,
  sortDirection: "asc",
};

const postEngagementSlice = createSlice({
  name: "postEngagement",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setDeleteModal(state, action: PayloadAction<boolean>) {
      state.deleteModal = action.payload;
    },
    setRenameModal(state, action: PayloadAction<boolean>) {
      state.renameModal = action.payload;
    },
    setSelectedRows(state, action: PayloadAction<string[]>) {
      state.selectedRows = action.payload;
    },
    setSelectAll(state, action: PayloadAction<boolean>) {
      state.selectAll = action.payload;
    },
    setSortColumn(
      state,
      action: PayloadAction<keyof IPostEngagementProps | null>
    ) {
      state.sortColumn = action.payload;
    },
    setSortDirection(state, action: PayloadAction<"asc" | "desc">) {
      state.sortDirection = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setCurrentPage,
  setDeleteModal,
  setRenameModal,
  setSelectedRows,
  setSelectAll,
  setSortColumn,
  setSortDirection,
} = postEngagementSlice.actions;

export default postEngagementSlice.reducer;
