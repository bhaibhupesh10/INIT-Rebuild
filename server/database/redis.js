import Redis from "ioredis"
import { config } from 'dotenv';

const client = new Redis("rediss://default:AerFAAIjcDE5ZjBhZDljNTQxYjQ0YzRkOWFkOGE5YjE1OTYxMzAyOHAxMA@adequate-grub-60101.upstash.io:6379");
await client.set('foo', 'bar');