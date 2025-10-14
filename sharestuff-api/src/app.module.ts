import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { SellerProfileModule } from './seller_profile_creation/sellerProfile.module';
import { itemListingModule } from './item_listing/itemListing.module';
import { ReviewsModule } from './reviews/reviews.module';
import { rentalRequestModule } from './rental_requests/rentalRequest.module';

@Module({
  imports: [
    // 🔹 Load .env file globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 🔹 TypeORM configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'ss',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),

    // 🔹 Mailer configuration
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          service: 'gmail',
          auth: {
            user: config.getOrThrow<string>('MAIL_USER'),
            pass: config.getOrThrow<string>('MAIL_PASS'),
          },
        },
        defaults: {
          from: '"ShareStuff Support" <no-reply@sharestuff.com>',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: { strict: true },
        },
      }),
    }),

    // 🔹 Other feature modules
    AuthModule,
    SellerProfileModule,
    itemListingModule,
    ReviewsModule,
    rentalRequestModule,
  ],
})
export class AppModule {}
