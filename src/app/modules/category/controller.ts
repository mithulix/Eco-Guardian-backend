import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoriesSearchAndFilter } from './constant';
import { categoryService } from './service';

const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const categoryData = req.body;
  const result = await categoryService.createCategory(categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getCategories: RequestHandler = catchAsync(async (req, res) => {
  const paginationOPtions = pick(req.query, paginationFields);
  const filtersOPtions = pick(req.query, categoriesSearchAndFilter);
  const result = await categoryService.getCategories(
    paginationOPtions,
    filtersOPtions
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await categoryService.getCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category data fetched successfully',
    data: result,
  });
});

const updateCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const categoryData = req.body;
  const result = await categoryService.updateCategory(id, categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await categoryService.deleteCategory(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Delete successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
