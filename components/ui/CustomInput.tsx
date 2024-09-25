import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { z } from 'zod'
import { Control, FieldPath } from 'react-hook-form'
import { authFormSchma } from '@/lib/utils'

const formSchema = authFormSchma('sign-up');

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>
    placeholder: string
    name: FieldPath<z.infer<typeof formSchema>>
}

const CustomInput = ( { control,placeholder, name }: CustomInputProps) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type={name==='password' ? 'password' : 'text'} placeholder={placeholder} {...field} />
              </FormControl>
              <FormMessage className='text-danger'/>
            </FormItem>
          )}
        />
  )
}

export default CustomInput