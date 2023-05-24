import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  filter() {
    return { message: `The filter` };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: string) {
    return { message: `Product ${id}` };
  }

  @Get()
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=>${limit}, offset=>${offset}, brand=>${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'creation action', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { message: 'update action', id, payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { message: 'delete action', id };
  }
}